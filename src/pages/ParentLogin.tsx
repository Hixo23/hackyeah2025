import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import logoImage from "@/assets/logo-mlody-krakow.png";

const ParentLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const handleLogin = () => {
    navigate(`/parent-consent?projectId=${projectId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-background p-6">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <img 
          src={logoImage} 
          alt="młody KRAKÓW" 
          className="w-64 h-auto mb-12"
        />
        
        <h1 className="text-2xl font-bold text-primary mb-2 text-center">
          Logowanie - opiekun
        </h1>
        <h2 className="text-xl font-bold text-primary mb-8 text-center">
          wolontariusza niepełnoletniego
        </h2>

        <div className="w-full space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 text-base"
            onClick={handleLogin}
          >
            M Obywatel
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 text-base"
            onClick={handleLogin}
          >
            Profil zaufany
          </Button>

          <Button
            className="w-full h-12 text-base"
            onClick={handleLogin}
          >
            Zaloguj
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParentLogin;
