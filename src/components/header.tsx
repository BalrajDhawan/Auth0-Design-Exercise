import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Settings,
  Save
} from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] px-6 py-4">
        <div className="flex items-center gap-3 text-white">
            <div className="size-6 text-[var(--primary-color)]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
            </div>
            <h1 className="text-xl font-bold">FormForge</h1>
        </div>
        <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
                <a className="transition-colors hover:text-[var(--text-primary)]" href="#">Templates</a>
                <a className="transition-colors hover:text-[var(--text-primary)]" href="#">Forms</a>
                <a className="transition-colors hover:text-[var(--text-primary)]" href="#">Responses</a>
                <a className="transition-colors hover:text-[var(--text-primary)]" href="#">Integrations</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[var(--primary-color)] text-white text-sm font-semibold tracking-wide transition-colors hover:bg-blue-600">
                    <span className="truncate">New Form</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBi-8EbTetoTudJxEwD5BuOJuRyIcCTsHp_rz0CVrnA8_x4XT_DbIy5oHD5Nk2MAbAceEATi2z1VMbMO6BUH9vvXlJ8r6_MCRmzZJBMT5cZeIke0tVmCTQArIek2V9XYPFZ6Ua4e2vmqh8sJVGzwlnarqBlQuA8ldUGxUJJg5FIx--46f9kysk6-ugrLtMWHAZfojd_54ALz-_UrxL8wWX2VcurnYp4fCP5gHcAGxv7rYRIDmFX1kX9Y3vsZiFBNwjKXKaBlpZVtDTv")`}}></div>
            </div>
        </div>
    </header>

    // <header className="flex items-center justify-between bg-white text-gray-900 px-6 py-4 border-b border-gray-200 h-16 shadow-sm">
    //   <div className="flex items-center space-x-4">
    //     <Link href="/" className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
    //       <ArrowLeft className="w-4 h-4 text-gray-600" />
    //     </Link>
    //     <div className="flex items-center space-x-2">
    //       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    //       <h1 className="font-semibold text-lg">FormKit Builder</h1>
    //     </div>
    //   </div>
      
    //   <div className="flex items-center space-x-3">
    //     <Button variant="outline" size="sm">
    //       <Save className="w-4 h-4 mr-2" />
    //       Save Draft
    //     </Button>
        
    //     <Button variant="outline" size="sm">
    //       <Download className="w-4 h-4 mr-2" />
    //       Export
    //     </Button>
        
    //     <Button variant="outline" size="sm">
    //       <Share2 className="w-4 h-4 mr-2" />
    //       Share
    //     </Button>
        
    //     {/* Tu apne walon done krde baaki dekh lange, ki pending hai iss vich/ */}
    //     <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
    //       <Settings className="w-4 h-4 mr-2" />
    //       Publish
    //     </Button>
    //   </div>
    // </header>
  );
};

export { Header };
