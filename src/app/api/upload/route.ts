import { NextRequest , NextResponse } from "next/server";

import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";
import {v4 as uuidv4} from 'uuid'

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
});

export async function POST(request:NextRequest){

    const formData = await request.formData()
        const file: File | null = formData.get('file') as unknown as File;

    if (!file) {
        return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${uuidv4()}-${file.name}`;

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: filename,
        Body: buffer,
        ContentType: file.type,
    };

    try {
        await s3.send(new PutObjectCommand(params));

        const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;

        return NextResponse.json({ url: fileUrl });
    } catch (error) {
        console.error('Erreur S3 :', error);
        return NextResponse.json({ error: 'Erreur lors de l\'upload' }, { status: 500 });
    }
}




