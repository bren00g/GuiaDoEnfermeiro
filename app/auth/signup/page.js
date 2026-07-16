import { redirect } from "next/navigation";

export default function SignupPage() {
  redirect("/legacy?auth=signup");
}
