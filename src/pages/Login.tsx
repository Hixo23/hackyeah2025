import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo-mlody-krakow.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-background p-6">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <img 
          src={logoImage} 
          alt="młody KRAKÓW" 
          className="w-64 h-auto mb-12"
        />
        
        <h1 className="text-2xl font-bold text-primary mb-8 text-center">
          Logowanie - wolontariusz
        </h1>

        <div className="w-full space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 text-base"
            onClick={() => navigate("/search")}
          >
            M Obywatel
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 text-base"
            onClick={() => navigate("/search")}
          >
            Profil zaufany
          </Button>

          <Button
            className="w-full h-12 text-base"
            onClick={() => navigate("/search")}
          >
            Zaloguj
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
