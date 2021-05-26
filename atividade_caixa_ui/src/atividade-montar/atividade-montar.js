import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Skeleton } from 'primereact/skeleton';

import './atividade-montar.css';

import useSound from 'use-sound';
import boopSfx from './../sounds/boop.mp3';
import dunDunDun from './../sounds/dun-dun-dun.mp3';
import fanfare from './../sounds/fanfare.mp3';

import { motion } from 'framer-motion';
import MenuBar from '../menu-bar/menu-bar';

// export default function AtividadeMontar() {
const AtividadeMontar = () => {

    const [iconCheckAndTimes, setIconCheckAndTimes] = useState(false);

    const [requestProgress, setRequestProgress] = useState(false);

    const [playBoopSfx] = useSound(boopSfx);
    // const [playPfff] = useSound(pfff);

    const [playFanfare] = useSound(fanfare);

    const [playDunDunDun] = useSound(dunDunDun);

    const [atividadeId, setAtividadeId] = useState(AtividadeCaixa);
    const { id } = useParams();

    // const toast = useRef(null);

    useEffect(() => {

        setRequestProgress(true);
        async function loadAtividadeId() {
            axios.get(`http://localhost:8001/atividade_caixa/${id}`).then(response => {
                setAtividadeId(response.data)
                // console.log("atividadeId", atividadeId)
                setRequestProgress(false);
            });
        }

        loadAtividadeId()
    }, []);

    function converteImagemBase64ParaHtml(imagem) {

        let novaImagem;
        novaImagem = "data:image/jpg;base64," + imagem + "";

        return novaImagem;
    }

    // function somRespostaA() {
    const somRespostaA = () => {
        setIconCheckAndTimes(true)

        const atividadeCertaA = atividadeId.atividadeCaixaRespostaA.respostaCorreta

        console.log("Resposta A", atividadeCertaA)

        if (atividadeCertaA === true) {
            playFanfare()
            // checkRespostaCorreta()
            return <i className="pi pi-check" style={{'fontSize': '2em'}}></i>
        } else {
            playDunDunDun()
        }

    }

    function somRespostaB() {
        setIconCheckAndTimes(true)
        const atividadeCertaB = atividadeId.atividadeCaixaRespostaB.respostaCorreta

        console.log("Resposta B", atividadeCertaB)

        if (atividadeCertaB === true) {
            playFanfare()
        } else {
            playDunDunDun()
        }

    }

    function somRespostaC() {
        setIconCheckAndTimes(true)
        const atividadeCertaC = atividadeId.atividadeCaixaRespostaC.respostaCorreta
        
        console.log("Resposta C", atividadeCertaC)
        
        if (atividadeCertaC === true) {
            playFanfare()
        } else {
            playDunDunDun()
        }

    }

    return (
        <div className="">
            <MenuBar/>

                <If condition = { requestProgress }>
                    <Skeleton className="skeleton1" width="15rem" height="15rem"></Skeleton>
                    <Skeleton className="skeleton2" width="10rem" height="10rem"></Skeleton>
                    <Skeleton className="skeleton3" width="10rem" height="10rem"></Skeleton>
                    <Skeleton className="skeleton4" width="10rem" height="10rem"></Skeleton>
                </If>

                <If condition = { !requestProgress }>
                    <div >

                        <div className="">
                            <div className="" style={{height: '50px'}}>{atividadeId.perguntaTitulo}</div>
                        </div>

                        <div className="">
                            <div className="" >{atividadeId.perguntaTxt}</div>
                            
                            <div className="">
                                <div className="p-col-6 p-col-align-center p-sm-6 p-md-6">
                                    <motion.button className="montion-pergunta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <img className="" onClick={playBoopSfx}
                                            src={`${converteImagemBase64ParaHtml(atividadeId.perguntaImg)}`}
                                            style={{width: 150, height: 200}}/>
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        <div className="p-grid p-align-center">

                            <div className="p-fluid p-formgrid p-grid">
                            {/* <div className="p-grid p-dir-col"> */}
                                <div className="p-field p-col-6 p-sm-6 p-md-6">
                                {/* <div className="p-col-12 p-sm-12 p-md-6"> */}
                                    <motion.button className="motion-resposta-A" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <img className="" onClick={somRespostaA}
                                            src={`${converteImagemBase64ParaHtml(atividadeId.atividadeCaixaRespostaA.respostaImg)}`}  
                                            style={{width: 100, height: 100}}/>
                        
                                            <If condition = { iconCheckAndTimes }>
                                                <div>
                                                    <If condition = { atividadeId.atividadeCaixaRespostaA.respostaCorreta }>
                                                        <i className="pi pi-check" style={{'fontSize': '2em', 'color': 'green'}}></i>
                                                    </If>
                                                    <If condition = { !atividadeId.atividadeCaixaRespostaA.respostaCorreta }>
                                                        <i className="pi pi-times" style={{'fontSize': '2em', 'color': 'red'}}></i>
                                                    </If>
                                                </div>
                                            </If>
                                    </motion.button>
                                </div>
                                <div className="resposta-txt-A" style={{height: '50px'}}>
                                    {atividadeId.atividadeCaixaRespostaA.respostaTxt}</div>
                            </div>
                

                            <div className="p-fluid p-formgrid p-grid">                               
                                <div className="p-field p-col-6 p-sm-6 p-md-6">
                                    <motion.button className="motion-resposta-B" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <img className="" onClick={somRespostaB}
                                            src={`${converteImagemBase64ParaHtml(atividadeId?.atividadeCaixaRespostaB?.respostaImg)}`}
                                            style={{width: 100, height: 100}}/>

                                            <If condition = { iconCheckAndTimes }>
                                                <div>
                                                    <If condition = { atividadeId.atividadeCaixaRespostaB.respostaCorreta }>
                                                        <i className="pi pi-check" style={{'fontSize': '2em', 'color': 'green'}}></i>
                                                    </If>
                                                    <If condition = { !atividadeId.atividadeCaixaRespostaB.respostaCorreta }>
                                                        <i className="pi pi-times" style={{'fontSize': '2em', 'color': 'red'}}></i>
                                                    </If>
                                                </div>
                                            </If>
                                    </motion.button>
                                </div>
                            <div className="resposta-txt-B">
                                <div className="" style={{height: '50px'}}>
                                    {atividadeId?.atividadeCaixaRespostaB?.respostaTxt}</div>
                            </div>
                            </div>


                            <div className="p-fluid p-formgrid p-grid">                      
                                <div className="p-field p-col-12 p-sm-12 p-md-12">
                                    <motion.button className="motion-resposta-C" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <img className="" onClick={somRespostaC}
                                            src={`${converteImagemBase64ParaHtml(atividadeId?.atividadeCaixaRespostaC?.respostaImg)}`}
                                            style={{width: 100, height: 100}}/>

                                            <If condition = { iconCheckAndTimes }>
                                                <div>
                                                    <If condition = { atividadeId.atividadeCaixaRespostaC.respostaCorreta }>
                                                        <i className="pi pi-check" style={{'fontSize': '2em', 'color': 'green'}}></i>
                                                    </If>
                                                    <If condition = { !atividadeId.atividadeCaixaRespostaC.respostaCorreta }>
                                                        <i className="pi pi-times" style={{'fontSize': '2em', 'color': 'red'}}></i>
                                                    </If>
                                                </div>
                                            </If>
                                    </motion.button>
                                </div>
                            </div>

                            <div className="resposta-txt-C">
                                <div className="" style={{height: '50px'}}>
                                    {atividadeId?.atividadeCaixaRespostaC?.respostaTxt}</div>
                            </div>
                     </div>
                </div>
            </If>
        </div>
    ); 
}

export default (AtividadeMontar);