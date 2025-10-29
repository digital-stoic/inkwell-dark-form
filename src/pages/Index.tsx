import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Submitted",
      description: text || "No message entered",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-[hsl(0_0%_5%)] p-4">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              Minimalist Form
            </h1>
            <p className="text-sm text-muted-foreground">
              Simple and elegant
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-sm font-light text-foreground/80">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] resize-none bg-card border-border focus:border-ring transition-all duration-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
