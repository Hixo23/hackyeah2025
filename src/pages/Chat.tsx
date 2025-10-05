import BottomNavigation from "@/components/BottomNavigation";

const Chat = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-6">Czat</h1>
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground text-center">
            Funkcja czatu będzie dostępna wkrótce
          </p>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Chat;
