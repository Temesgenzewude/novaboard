import DatePicker from "./DatePicker";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

export default function TodoList() {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <DatePicker />

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
