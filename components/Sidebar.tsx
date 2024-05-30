import Link from 'next/link'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_header">
          <div className="sidebar_header-logo">
            <Link href={'/'} target={'_blank'}>
              <Image
                src="/images/impermanence_white.png"
                alt="Logo Impermanence"
                width={150}
                height={100}
              />
              {/* <img src="/images/impermanence_white.png" width={150} /> */}
            </Link>
          </div>
          <div className="sidebar_header-logo-barcode">
            <h2>Impermanence</h2>
          </div>
          <ul className="sidebar_list">
            <li>
              <Link href="/dashboard">
                <p>DASHBOARD</p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/create-film" className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>CREATE FILM</p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/create-news" className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>CREATE NEWS</p>
              </Link>
            </li>
            {/* <li>
              <Link href="/dashboard/create-category">
                <p>Create category</p>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="btn_container">
          <button onClick={() => signOut()} className="btn w-32 mb-10">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
