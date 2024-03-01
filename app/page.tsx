import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col  gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to SRS Software Systems - Empowering Businesses through Innovative Solutions Since August 2010.</strong> 
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="fflex flex-col  gap-6 rounded-lg bg-gray-50 px-6 py-10 ">
          <div>
          At SRS Software Systems, we take pride in our journey as a pioneering software company, delivering cutting-edge solutions to businesses worldwide. 
          With a rich experience spanning over a decade, we specialize in providing comprehensive software development services, leveraging the latest technologies and frameworks.
          </div>
          <h2 className='pt-2 pb-2 text-xl font-medium'>Our Expertise:</h2>

          <ol className='list-decimal pl-10'>
          <li>
            <h2 className='pt-2 pb-2 text-md font-medium'>Web Development:</h2>
              <ul className='list-disc'>
              <li>PHP</li>
              <li>Python</li>
              <li>Laravel</li>
              <li>Django</li>
              <li>GoLang</li>
              <li>Next.js</li>
              </ul>
            </li>
            <li>
              <h2 className='pt-2 pb-2 text-md font-medium'>CRM/ERP/Accounting Solutions:</h2>
              <ul className='list-disc'>
              <li>Zoho CRM</li>
              <li>Xero API</li>
              <li>Infusionsoft</li>
              <li>Odoo</li>
              <li>Tradegecko</li>
              <li>Cliniko</li>
              <li>Quickbooks</li>
              <li>Custom CRM/ERP Solution</li>
              </ul>
            </li>
            <li>
              <h2 className='pt-2 pb-2 text-md font-medium'>API Integration:</h2>
              <ul className='list-disc'>
              <li>Seamless integration of diverse APIs to enhance functionality and connectivity.</li>
              <li>Google API</li>
              <li>Cloud Server Setup and Maintenance</li>
              </ul>
            </li>
            <li>
              <h2 className='pt-2 pb-2 text-md font-medium'>Database Management:</h2>
              <ul className='list-disc'>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>mongoDB</li>
              </ul>
            </li>
          </ol>
          <h2 className='pt-2 pb-2 text-xl font-medium'>Our Commitment:</h2>
          <ul className='list-disc pl-10'>
          <li>
            <strong>Innovation:</strong> We thrive on pushing the boundaries of technology to deliver innovative solutions that cater to the dynamic needs of businesses.
            </li>
            <li>
            <strong>Reliability:</strong> With a decade-long presence in the market, we have established ourselves as a reliable partner for businesses seeking robust and scalable software solutions.
            </li>
            <li>
            <strong>Customization:</strong> Recognizing that each business is unique, we craft tailor-made solutions to meet specific requirements, ensuring optimal performance and user satisfaction.
            </li>
            <li>
            <strong>Customer-Centric Approach:</strong> Our focus is on understanding and addressing the unique challenges faced by our clients. We believe in building enduring relationships through exceptional service.
            </li>
            <li>
            <strong>Transparent Communication:</strong> We believe in transparent and open communication, keeping our clients informed at every stage of the development process.
            </li>
          </ul>
          <div className='pl-10 pt-10'>
            Whether you are looking to revamp your online presence, streamline business processes, or implement advanced CRM solutions, <strong>SRS Software Systems</strong> is your go-to partner. Join hands with us to embark on a journey of digital transformation and elevate your business to new heights.

            <p className='pt-5'>Write us at <Link href="mail:sunil@srsss.in" className='text-blue-800 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>sunil@srsss.in</Link> 
            today to discuss how we can transform your ideas into reality and drive your business towards success.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
