'use client'

import { useState } from "react"
import { useTheme } from "next-themes"

import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Command, CommandGroup, CommandItem, CommandList } from "./command"
import { Button } from "./button"

import { Sun } from "lucide-react"

const modes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
]

export const ButtonMode = () => {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme()

    const handleSelect = (value: string) => {
        setTheme(value);
        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"ghost"}
                    size="lg"
                    className="px-4"
                >
                    <Sun className="w-6 h-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[200px]">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {
                                modes.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={() => handleSelect(option.value)}
                                    >
                                        <span>{option.label}</span>
                                    </CommandItem>
                                ))
                            }
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}