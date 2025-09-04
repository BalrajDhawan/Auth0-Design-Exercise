import { FormBuilderCanvas } from "@/components/canvas";
import { Sidebar } from "@/components/sidebar";
import { PropertyPanel } from "@/components/property-panel";
import { Header } from "@/components/header";

export default function BuilderPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-auto">
          <FormBuilderCanvas />
        </main>
        <PropertyPanel />
      </div>
    </div>
  );
}
