import { cn } from '@/@lib/utils';
import { ToolsProps, tools } from '@/data/tools';
import { Tech, getHoverColor } from '@/utils/functions/selectHoverColor';
import Image from 'next/image';

const ToolsCards = () => {
  return (
    <>
      {tools.map((tool: ToolsProps, i) => (
        <div
          key={i}
          className="bg-gradient-to-tl from-background to-primary/30 rounded-lg p-[0.5px] group"
        >
          <div className="w-56 h-16 rounded-lg bg-zinc-950/90 backdrop-blur-md flex items-start gap-4 p-4 overflow-hidden hover:cursor-pointer">
            <span
              className={cn(
                'fixed top-0 right-3 h-4 w-12 rounded-3xl bg-transparent opacity-90 blur-2xl',
                getHoverColor(tool.name.toLowerCase() as Tech)
              )}
            ></span>
            <span className="w-10 h-10 rounded-md">
              <Image src={tool.image} alt={tool.name + 'logo'} />
            </span>
            <p className="text-sm">{tool.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToolsCards;
