import {Button} from "@nextui-org/button";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";

import {TModalProps} from "@/types/modal.type";

const PopupModal = ({header, body, actions, isOpen, onOpenChange, size}: TModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} size={size} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
              <ModalBody>{body}</ModalBody>
              <ModalFooter>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    color={action.color}
                    variant={action.variant}
                    onPress={action.handler || onClose}
                  >
                    {action.label}
                  </Button>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupModal;
/* 
example for uses =>

 <PopupModal
     actions={[
       {label: "Close", color: "danger", variant: "light"},
       {
         label: "Action",
         color: "primary",
         variant: "flat",
         handler: () => console.log("Action button clicked"),
       },
     ]}
     body={<p>Modal content</p>}
     header="Modal Title"
     isOpen={isOpen}
     onOpenChange={onOpenChange}
    >
/>

*/
