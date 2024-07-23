import { GrupoForm } from "@/components/forms/grupo-form";
import ModalSlot from "@/components/modal-slot";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getGrupoDetalhe } from "@/services/administracaoMapa/grupoCamada/get-grupo-camada-detalhe";

export default async function EditGroupModal({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const grupoDetalhe = await getGrupoDetalhe(params.slug);

  return (
    <ModalSlot>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar grupo</DialogTitle>
        </DialogHeader>

        <GrupoForm hasCancelButton data={grupoDetalhe} />
      </DialogContent>
    </ModalSlot>
  );
}
