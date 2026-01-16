import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import type { ContactInput } from "@/lib/schemas";

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Mock network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    },
  });
}
