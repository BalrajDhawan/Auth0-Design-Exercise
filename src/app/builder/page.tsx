import { FormBuilderCanvas } from "@/components/form-builder/canvas";
import { Sidebar } from "@/components/form-builder/sidebar";
import { PropertyPanel } from "@/components/form-builder/property-panel";
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
