import LoginComponent from "@/components/ui/LoginComponent";


export default function Login() {

    return (
        <div className="flex flex-col items-center text-center pt-4 mt-20 ">
            <h2 className="text-3xl font-semibold m-4" >Connexion</h2>
            <div className="flex flex-col bg-gray-600/20 md:max-w-md w-full mx-auto pt-2 px-4 pb-4 mb-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed font-semibold">
                    Ce site est une version de démonstration. Ainsi, il n&apos;est pas possible
                    de créer réellement un compte pour le moment.
                    <br /> <br />
                    Afin de tester librement l’interface, vous pouvez utiliser les
                    identifiants ci-dessous :
                </p>
                <div className="flex flex-col mx-2 pt-3 pb-4 bg-white rounded-2xl">
                    <p><span className="font-bold">Email</span> : testUser20@gmail.com</p>
                    <p><span className="font-bold" >Mot de passe</span> : 123ABCDEFGHI???</p>
                </div>

            </div>

            <LoginComponent />
        </div>
    );
}

