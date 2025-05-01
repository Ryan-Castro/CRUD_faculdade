import { Appointment } from "@/app/@types/AppointmentTypes";
import { Prescription } from "@/app/@types/PrescriptionTypes";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


export default function HandlePrescriptionModal(props: { modalShow: number, handleModalShow: Dispatch<SetStateAction<number>>, Appointment: Appointment }) {

    const refModal = useRef<HTMLDivElement>(null)
    const dosageInput = useRef<HTMLInputElement>(null)
    const medicineInput = useRef<HTMLInputElement>(null)
    const instructionInput = useRef<HTMLInputElement>(null)
    const fileInput = useRef<HTMLInputElement>(null)
    const [link, setLink] = useState('')
    const [prescription, setPrescription] = useState<Prescription>({
        data: "",
        appointmentID: "",
        dosage: "",
        medicine: "",
        instruction: "",
        file: "",
        _id: ""
    })

    useEffect(() => {
        if (props.modalShow == 4) {
            refModal.current?.classList.remove('hidden');
            refModal.current?.classList.add('flex');
            return;
        };
        refModal.current?.classList.remove('flex');
        refModal.current?.classList.add('hidden');
        async function getPrescription() {
            await fetch(`http://localhost:8080/prescription/getAll`, {
                method: "GET",
                credentials: 'include',
            }).then(res => res.json()).then(json => {
                json.forEach((prescription: Prescription) => {
                if(props.Appointment.pacientId == prescription.appointmentID){
                    setPrescription(prescription)
                    dosageInput.current!.value = prescription.dosage;
                    medicineInput.current!.value = prescription.medicine;
                    instructionInput.current!.value = prescription.instruction;
                    setLink(prescription.file)
                }
                });
            })
            }
        getPrescription()
    }, [props])

    async function HandlePrescription() {
        if(fileInput.current!.files){
            await fetch(`http://localhost:8080/prescription/addFile`, {
                method: "POST",
                credentials: 'include',
                headers: { 'Content-Type': 'multipart/form-data',},
                body: fileInput.current!.files[0]
            }).then(res => res.json()).then(json => {
                setLink(json.link)
                
            })
        }
        const formData: Prescription = {
            data: props.Appointment.data,
            appointmentID: props.Appointment._id,
            dosage: dosageInput.current!.value,
            medicine: medicineInput.current!.value,
            instruction: instructionInput.current!.value,
            file: link
        }
        if(prescription._id == ""){
            await fetch(`http://localhost:8080/prescription/savePrescription`, {
                method: "POST",
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(formData)
            }).then(res => res.json()).then(() => {
                props.handleModalShow(0)
                return
            })
        }
        await fetch(`http://localhost:8080/prescription/update/${prescription._id}`, {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(() => {
            props.handleModalShow(0)
            return
        })
    }
    return (
        <div className="modalContainer hidden" ref={refModal}>
            <div className="modalContent flex flex-col">
                <input type="text" className="bg-gray-500" placeholder="Remédio" ref={dosageInput} />
                <input type="text" className="bg-gray-500" placeholder="Dosagem" ref={medicineInput} />
                <input type="text" className="bg-gray-500" placeholder="Instrução" ref={instructionInput} />
                <input type="file" className="bg-gray-500" ref={fileInput} />
                <input type="button" className="bg-yellow-500" value="Deletar" onClick={HandlePrescription} />
                <input type="button" className="bg-red-500" value="Cancelar" onClick={() => { props.handleModalShow(0) }} />
            </div>
        </div>
    );
}
