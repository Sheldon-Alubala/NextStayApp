import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { startTransition, useState } from "react"
  import { ICategory } from "@/lib/database/models/category.model"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from "../ui/input"
  
  

type DropDownProps = {
    value?: string,
    onChangeHandler?: () => void
}

function DropDown({value, onChangeHandler}: DropDownProps) {
    const [categories, setCategories] = useState<ICategory[]>([])

    const [newCategory, setNewCategory] = useState("")

    const handleAddCtegory = () => {
        
    }
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {categories.length > 0 && categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                    {category.name}
                </SelectItem>
            ))}
    <AlertDialog>
    <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8
     text-primary-500 hover:bg-primary-500 focus:text-primary-600">Open</AlertDialogTrigger>
    <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
        <AlertDialogTitle>New Category</AlertDialogTitle>
        <AlertDialogDescription>
            <Input className="input-field mt-3"
            type="text"
            placeholder="Category name"
            onChange={(e) =>
            setNewCategory(e.target.value)}
            />
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => startTransition
        (handleAddCtegory)}>Add</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>

        </SelectContent>
    </Select>

  )
}

export default DropDown