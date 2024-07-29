import React from 'react';

const SectionLois = () => {
    return (
        <div className="pl-12 pr-12" style={{ paddingTop: "165px", paddingBottom: "165px" }}>
            <div className="flex justify-between items-start gap-12">
                <div className="w-1/2 pr-4">
                    <h1 className="text-6xl font-secondary text-custom-green font-bold mb-8">VOUS ACCOMPAGNER<br /> AVEC DES GAMMES CONFORMES AUX LOIS</h1>
                    <div className='max-w-lg border-2 rounded-lg border-custom-blue p-8'>
                        <h2 className="text-xl text-custom-green font-bold mb-4">Nouveau marquage pour les gobelets carton</h2>
                        <p>
                            Ce texte impose un marquage &agrave; partir du 3 Juillet 2021 (date de la mise en application de la Directive Europ&eacute;enne Single Use Plastics) sur les gobelets en carton ou cellulose au bambou rev&ecirc;tus d&apos;un film plastique.
                            Il doit &ecirc;tre mis en place dans tous les pays Europ&eacute;ens. Conform&eacute;ment &agrave; la Directive SUP, ce marquage signale : &quot;Le geste de tri, la pr&eacute;sence de plastique dans le produit et les effets n&eacute;fastes sur l&apos;environnement&quot; emp&ecirc;chant le d&eacute;p&ocirc;t sauvage ou d&apos;autres moyens d&apos;&eacute;limination inappropri&eacute;s des d&eacute;chets...
                        </p>
                        <button className="mt-4 pl-10 pr-10 bg-white border-2 text-custom-blue px-4 py-2 rounded" style={{ color: "#5CBDEC", borderColor: "#5CBDEC" }}>Bouton</button>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <div className="flex justify-center items-center mb-8">
                        <button className="bg-transparent border-2 border-custom-green text-custom-green px-6 py-2 mr-12 rounded-lg">Nom de la loi</button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2">Directive Europ&eacute;enne SUP</button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green px-6 py-2 rounded-lg">Nom de la loi</button>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <img src="Gobelets double paroi GDSK_Sketch.png" alt="Cups" className="w-1/2" />
                        <img src="Gobelets BAMBGOB_Sketch.png" alt="Cups" className="w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionLois;
