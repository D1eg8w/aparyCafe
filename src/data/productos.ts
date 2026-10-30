import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.webp";
import imgPergaminoSaco from "@/assets/PRODUCTOS/cafepergaminosinfondo.webp";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.webp";
import imgOroSaco from "@/assets/PRODUCTOS/cafeorosinfondo.webp";
import imgPergaminoSacosReal from "@/assets/PRODUCTOS/pergamino-sacos-asfepa.webp";
import imgPergaminoSecado from "@/assets/PRODUCTOS/pergamino-secado-solar-asfepa.webp";
import imgOroVerdeSeleccion from "@/assets/PRODUCTOS/oro-verde-seleccion-asfepa.webp";
import imgTostadoRevision from "@/assets/PRODUCTOS/cafe-tostado-revision.webp";
import imgTostadoGranos from "@/assets/PRODUCTOS/cafe-tostado-granos.webp";
import imgTostadoMolido250g from "@/assets/PRODUCTOS/cafe-tostado-molido-apary-250g.webp";
import imgTostado from "@/assets/PRODUCTOS/CAFETOSTADO(ACTUALIZADO).webp";
import type { ProductPresentation } from "@/components/ProductImageCarousel";

interface Product {
    name: string;
    description: string;
    image: string;
    presentations: ProductPresentation[];
    features: string[];
    badge: string;
    technicalDetails: { label: string; value: string }[];
}

export const products: Product[] = [
    {
        name: "Café Pergamino",
        description: "Café de nuestras familias productoras, cosechado selectivamente y secado al sol para conservar su limpieza y calidad.",
        image: imgPergamino,
        presentations: [
            { label: "Secado solar del café", image: imgPergaminoSecado, fit: "cover" },
            { label: "Café pergamino en sacos", image: imgPergaminoSacosReal, fit: "cover" },
            { label: "Presentación en saco", image: imgPergaminoSaco },
        ],
        features: ["Cosecha selectiva", "Secado solar", "Saco de 50 kg"],
        badge: "Exportación",
        technicalDetails: [
            { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco" },
            { label: "Altitud", value: "1,500 – 1,800 msnm" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor y Obata rojo" },
            { label: "Postcosecha", value: "Cosecha selectiva, fermentación controlada y secado solar" },
            { label: "Calidad y empaque", value: "Humedad 10–12 % · sacos de 50 kg" }
        ]
    },
    {
        name: "Café Oro Verde",
        description: "Café verde seleccionado por tamaño, densidad y defectos, listo para desarrollar su perfil en tostión.",
        image: imgOroVerde,
        presentations: [
            { label: "Selección del café oro verde", image: imgOroVerdeSeleccion, fit: "cover" },
            { label: "Presentación en saco", image: imgOroSaco, scale: 1.28 },
        ],
        features: ["Selección por tamaño y densidad", "Humedad 10–12 %", "Ideal para tostadores"],
        badge: "Premium",
        technicalDetails: [
            { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco" },
            { label: "Altitud", value: "1,500 – 1,800 msnm" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor y Obata rojo" },
            { label: "Proceso", value: "Trilla y clasificación por tamaño y densidad" },
            { label: "Perfil esperado", value: "Floral y frutal, dulzor natural, acidez equilibrada" },
            { label: "Calidad y empaque", value: "Humedad 10–12 % · sacos de 50 kg" }
        ]
    },
    {
        name: "Café Tostado",
        description: "Café de especialidad tostado artesanalmente, con aroma floral y frutal y un final limpio y sedoso.",
        image: imgTostado,
        presentations: [
            { label: "Revisión del café tostado", image: imgTostadoRevision, fit: "cover" },
            { label: "Café tostado en grano", image: imgTostadoGranos, fit: "cover" },
            { label: "Empaque APARY de 500 g", image: imgTostado },
        ],
        features: ["80–85 puntos", "Tostado medio", "Tostado artesanal"],
        badge: "Popular",
        technicalDetails: [
            { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor y Obata rojo" },
            { label: "Tostión y perfil", value: "Tostado medio · floral, frutal y dulce" },
            { label: "Notas de taza", value: "Jazmín, frutas tropicales y cítricos suaves" },
            { label: "Presentación", value: "Grano entero · bolsa con válvula" },
            { label: "Conservación", value: "6–8 meses cerrado; guardar en lugar fresco y seco" }
        ]
    },
    {
        name: "Café Tostado y Molido",
        description: "Café recién molido bajo pedido para una preparación práctica, conservando sus aromas y dulzor natural.",
        image: imgTostadoMolido250g,
        presentations: [
            { label: "Empaque APARY de 250 g", image: imgTostadoMolido250g, scale: 1.25 },
        ],
        features: ["80–85 puntos", "Molienda según preparación", "Listo para preparar"],
        badge: "Artesanal",
        technicalDetails: [
            { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor y Obata rojo" },
            { label: "Tostión y perfil", value: "Tostado medio · dulce, floral y frutal" },
            { label: "Notas de taza", value: "Jazmín, frutas tropicales y chocolate suave" },
            { label: "Molienda", value: "A elección: prensa, filtro, italiana o espresso" },
            { label: "Empaque mostrado", value: "Bolsa APARY de 250 g" },
            { label: "Conservación", value: "Bolsa con válvula · consumir dentro de 30 días una vez abierta" }
        ]
    }
];
