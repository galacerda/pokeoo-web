import { useState } from "react";
import Modal from "../Modal";
import * as S from './styled';

type StatsProps = {
    word:string[];
}

const Stats = ({word}:StatsProps) =>{
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false) ;
    const openModal = () => setOpen(true);

    return (
        <S.Wrapper>
            <S.Stats onClick={() => openModal()} /> 
            <Modal isModified word={word} modalState={open} openModal={openModal} closeModal={closeModal} />
        </S.Wrapper>
    );
}

export default Stats;