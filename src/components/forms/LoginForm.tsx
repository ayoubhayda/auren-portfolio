import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { auth, signIn } from "@/utils/auth";
import SubmitButton from "../general/SubmitButton";
import { redirect } from "next/navigation";
import { GitHub, GitHubBlack } from "@/assets/svg/GitHub";

const LoginForm = async () => {
  const session = await auth();

  if (session?.user) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="text-center shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">Bienvenue</CardTitle>
          <CardDescription>
            Connectez-vous avec votre compte GitHub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* Login with github */}
            <form
              action={async () => {
                "use server";
                await signIn("github", {
                  redirectTo: "/dashboard",
                });
              }}
            >
              <SubmitButton
                text="Se connecter avec Github"
                className="w-full"
                variant="outline"
                icon={
                  <>
                    <GitHub className="size-4 hidden dark:block" />{" "}
                    <GitHubBlack className="size-4 dark:hidden" />
                  </>
                }
              />
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="text-xs text-muted-foreground text-balance text-center">
        En cliquant sur Continuer, vous acceptez nos Conditions
        d&apos;utilisation et notre Politique de confidentialité.
      </div>
    </div>
  );
};

export default LoginForm;
