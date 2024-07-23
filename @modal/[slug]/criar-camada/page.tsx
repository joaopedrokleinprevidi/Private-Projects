"use client";

import { PlusCircle } from "lucide-react";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ModalSlot from "@/components/modal-slot";
import { CriarCamadaForm } from "./components/criar-camada-form";

export function CriarCamada({ slug }: { slug: string }) {
  return (
    <ModalSlot>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>Nova camada</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <DialogHeader className="mb-3">
          <DialogTitle>Criar camada</DialogTitle>
          <DialogDescription>
            Crie e customize uma nova camada para o mapa.
          </DialogDescription>
        </DialogHeader>

        <CriarCamadaForm slug={slug} />
      </DialogContent>
    </ModalSlot>
  );
}
