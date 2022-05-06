import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FacturaImage from "../svg/FacturaImage"
import Card from '../components/Card';
import SplitSection from "../components/SplitSection";
import SvgCharts from "../svg/SvgCharts";
import SvgDashboard from "../svg/SvgDashboard";
import SvgReport from "../svg/SvgReport";
import LabelText from "../components/LabelText";
import CustomerCard from "../components/CustomerCard";
import customerData from "../data/customer-data";
import ContactForm from "../components/ContactForm";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="pt-10 md:pt-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
        {/* <iframe
          style={{
            width: '120px',
            height: '240px',
          }}
          src='//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=bm1984-20&marketplace=amazon&amp;region=US&placement=B09KY7BMXF&asins=B09KY7BMXF&linkId=a8a1ed0293739c614f7efebea9f08fa6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff'

        /> */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Facturación Electrónica
          </h1>
          
          <p className="text-xl lg:text-2xl mt-6 font-light">
            La forma más ágil que puedes encontrar en Ecuador para la emisión de comprobantes electrónicos. Desde la web o desde un dispositivo móvil.
          </p>
        </div>
        <div className="lg:w-1/2">
          <FacturaImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-10 lg:pb-5 lg:pt-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Características</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Servicio en la nube</p>
              <p className="mt-4">
                Software alojado en la nube bajo el respaldo de uno de los mejores proveedores de infraestructura en el mundo Amazon Web Services.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Regulación SRI</p>
              <p className="mt-4">
                Siempre actualizado con las últimas resoluciones emitidas por el SRI.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Política de Privacidad</p>
              <p className="mt-4">
                Tus datos siempre estarán protegidos y no serán divulgados gracias a nuestra política de privacidad.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Emisión de comprobantes</h3>
          <p className="mt-4 text-xl font-light leading-relaxed">
            Emite facturas, comprobantes de retención, notas de crédito y débito.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Controla tus ventas
          </h3>
          <p className="mt-4 text-xl font-light leading-relaxed">
            Dashboard con la información de tus ventas, número de facturas emitidas y porcentaje de ventas por cliente.
          </p>
        </div>
      }
      secondarySlot={<SvgDashboard />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Reporte de comprobantes
          </h3>
          <p className="mt-4 text-xl font-light leading-relaxed">
            Exporta tus comprobantes emitidos en el último mes o año.
          </p>
        </div>
      }
      secondarySlot={<SvgReport />}
    />
    <section id="testimonials" className="py-10 lg:py-5">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Nuestros Clientes</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id='contacto' className="container mx-auto my-5 py-12 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Regístrate para obtener un mes gratis</h3>
      <p className="mt-8 text-xl font-light">
        Ingresa tus datos y un asesor se comunicará contigo de inmediato.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  </Layout>
)

export default IndexPage