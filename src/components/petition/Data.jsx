import { Open } from "../../context/openContext";
import { useApiGit } from "../../hooks/ApiGit";
import { use } from "react";
import { Buttons } from "../ui/buttons/Buttons";
import { Input } from "../ui/input/input";
export const Data = () => {
  const { data, ApiGit } = useApiGit();
  const { open } = use(Open);

  return (
    <div>
      {open && (
        <div className="bg-card py-4 px-3 w-sm h-auto min-h-screen border-r border-text-second">
          <div className="flex justify-between">
            <h3 className="font-bold text-sm">Top Repositories</h3>
            <Buttons
              onClick={ApiGit}
              className="bg-button rounded-xl px-3 py-1 text-sm"
              content="New"
            />
          </div>
          <div className="flex justify-center py-2">
            <Input
              className="bg-bg-input rounded-md border border-text-second p-1 w-full text-sm"
              holder="Find a repository..."
            />
          </div>
          {data.length === 0 && <p className="text-center">Sin datos ...</p>}
          {data.data?.map((i) => (
            <div key={i.id} className="flex space-x-2 space-y-2 px-3">
              <img
                src={i.avatar_url}
                alt="{i.login}"
                className="rounded-full h-6"
              />
              <h2 className="text-sm">
                {i.login}/ ID: {i.id}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
