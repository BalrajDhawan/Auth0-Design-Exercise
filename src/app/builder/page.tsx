import { FormBuilderCanvas } from "@/components/canvas";
import { Sidebar } from "@/components/sidebar";
import { PropertyPanel } from "@/components/property-panel";
import { Header } from "@/components/header";

export default function BuilderPage() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <FormBuilderCanvas />
        </main>
        <PropertyPanel />
      </div>
    </>
  );
}
