import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-center text-primary mb-2">Привет.</h1>
          <p className="text-2xl text-center text-gray-600">Как дела?</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
