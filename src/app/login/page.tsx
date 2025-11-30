import LoginComponent from "@/components/LoginComponent";


export default function Home() {

    return (
        <div className="flex flex-col flex-grow justify-center items-center min-h-screenm-3 pt-4 ">
            <p>
                biensur , cest pas un vrai vrai site , donc en theorie tu ne devrais pas pouvoir enregistrer un compte <br />
                Tiens un compte utilisable <br />
                <br />
                email : testUser20@gmail.com
                <br />
                mot de passe : 123ABCDEFGHI???
            </p>
            <LoginComponent />
        </div>
    );
}

