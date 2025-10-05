import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share2, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import BottomNavigation from "@/components/BottomNavigation";

const ShareWithParent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  const [copied, setCopied] = useState(false);

  const shareLink = `${window.location.origin}/parent-consent?projectId=${project?.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    toast.success("Link skopiowany!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(
      `Cześć! Chciałbym wziąć udział w projekcie wolontariackim "${project?.title}". Potrzebuję Twojej zgody. Kliknij w link: ${shareLink}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent("Prośba o zgodę na wolontariat");
    const body = encodeURIComponent(
      `Cześć!\n\nChciałbym wziąć udział w projekcie wolontariackim "${project?.title}".\n\nPotrzebuję Twojej zgody. Kliknij w link poniżej:\n${shareLink}\n\nDziękuję!`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(shareLink);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Profil Twojego podopiecznego
        </h1>

        <p className="text-foreground mb-2">
          Udostępnij link aktywacyjny do konta swojego podopiecznego.
        </p>
        <p className="text-foreground mb-8">
          Link umożliwi mu zalogowanie się.
        </p>

        <div className="bg-card border-2 border-primary rounded-2xl p-6">
          <h2 className="text-xl font-bold text-primary text-center mb-6">
            Udostępnij przez:
          </h2>

          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={handleShareWhatsApp}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-foreground">Whatsapp</span>
            </button>

            <button
              onClick={handleShareEmail}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-[#EA4335] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">@</span>
              </div>
              <span className="text-sm text-foreground">Gmail</span>
            </button>

            <button
              onClick={handleShareFacebook}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">f</span>
              </div>
              <span className="text-sm text-foreground">Facebook</span>
            </button>
          </div>

          <Button
            variant="secondary"
            className="w-full mb-4"
            onClick={handleCopyLink}
          >
            {copied ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Skopiowano!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Skopiuj link
              </>
            )}
          </Button>

          <Button
            className="w-full"
            onClick={() => navigate("/my-projects")}
          >
            Przejdź do zatwierdzenia zgłoszenia
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ShareWithParent;
