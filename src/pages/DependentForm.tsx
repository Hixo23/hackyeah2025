import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DependentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    livesInKrakow: "true"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      navigate("/dependent-profile", { state: { project } });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-4">Dane podopiecznego</h1>
        
        <p className="text-sm text-foreground mb-6">
          O wypełnienie tego formularza prosimy Cię tylko raz. Dla Twojej wygody dane zostaną zapisane na użytek przyszłych zgłoszeń. Będziesz mógł je edytować w zakładce "profil".
        </p>

        <div className="flex gap-2 mb-6">
          <Button
            variant={step === 1 ? "default" : "outline"}
            className="flex-1"
            onClick={() => setStep(1)}
          >
            Krok 1
          </Button>
          <Button
            variant={step === 2 ? "default" : "outline"}
            className="flex-1"
            onClick={() => step === 2 && setStep(2)}
            disabled={step === 1}
          >
            Krok 2
          </Button>
        </div>

        {step === 1 ? (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-bold text-lg mb-4">
              INFORMACJA ADMINISTRATORA O PRZETWARZANIU DANYCH OSOBOWYCH
            </h2>
            <div className="text-sm text-foreground space-y-4 max-h-96 overflow-y-auto">
              <p>
                Zgodnie z art. 13 ust. 1 i 2 unijnego ogólnego rozporządzenia o ochronie danych (tzw. RODO) informujemy, że administratorem Twoich danych osobowych jest Prezydent Miasta Krakowa z siedzibą Pl. Wszystkich Świętych 3-4, 31-004 Kraków.
              </p>
              <p>
                Z administratorem możesz się skontaktować listownie (adres j.w.) lub drogą elektroniczną – adres: umk@umk.krakow.pl. Twoje dane osobowe będą przetwarzane w celu realizacji w okresie od 1 stycznia 2024 r. do 30 czerwca 2026 r. zadania publicznego pn. „CENTRUM OBYWATELSKIE CENTRUM C 10". Twoje dane są objęte rejestrem czynności przetwarzania pn. „Realizacja zadań z zakresu działalności pożytku publicznego".
              </p>
              <p>Informujemy, że:</p>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Masz prawo do żądania od administratora dostępu do Twoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.</li>
                <li>Masz prawo do wniesienia skargi do Prezesa UODO.</li>
              </ol>
            </div>
            <Button className="w-full mt-6" onClick={() => setStep(2)}>
              Dalej
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-primary">Imię</Label>
              <Input
                id="name"
                placeholder="Input"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="surname" className="text-primary">Nazwisko</Label>
              <Input
                id="surname"
                placeholder="Input"
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-primary">Numer telefonu</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Input"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-primary">Adres email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Input"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="text-primary mb-3 block">Mieszkasz w Krakowie?</Label>
              <RadioGroup
                value={formData.livesInKrakow}
                onValueChange={(value) => handleInputChange("livesInKrakow", value)}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="true" id="yes" />
                  <Label htmlFor="yes" className="font-normal">Tak</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="no" />
                  <Label htmlFor="no" className="font-normal">Nie</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full">
              Zapisz
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DependentForm;
