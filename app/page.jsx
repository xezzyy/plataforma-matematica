import { redirect } from "next/navigation";

// A página raiz redireciona sempre para /app (a lógica de auth fica em /app)
export default function Home() {
  redirect("/app");
}
