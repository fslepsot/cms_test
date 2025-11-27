import MainSidebar from "@/components/MainSidebar";
import SecondarySidebar from "@/components/SecondarySidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardFilters from "@/components/DashboardFilters";
import StatsCard from "@/components/StatsCard";
import ForecastSection from "@/components/ForecastSection";
import Logo from "@/components/Logo";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <div className="hidden lg:block">
        <MainSidebar />
      </div>
      <div className="hidden lg:block">
        <SecondarySidebar />
      </div>

      <div className="lg:ml-[382px] relative">
        <Logo />
        <DashboardHeader />

        <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mb-8">
            <DashboardFilters />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            <StatsCard
              value="240"
              label="Leaderboards"
              variant="green"
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3332 3.33325H9.99984C9.11578 3.33325 8.26794 3.68444 7.64281 4.30956C7.01769 4.93468 6.6665 5.78253 6.6665 6.66659V33.3333C6.6665 34.2173 7.01769 35.0652 7.64281 35.6903C8.26794 36.3154 9.11578 36.6666 9.99984 36.6666H29.9998C30.8839 36.6666 31.7317 36.3154 32.3569 35.6903C32.982 35.0652 33.3332 34.2173 33.3332 33.3333V13.3333L23.3332 3.33325Z"
                    fill="#119C30"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <mask id="path-2-inside-1" fill="white">
                    <path d="M24.1665 2.5V12.5H34.1665" />
                  </mask>
                  <path d="M24.1665 2.5V12.5H34.1665" fill="#AAF6BA" />
                  <path
                    d="M26.5665 2.5C26.5665 1.17452 25.492 0.0999999 24.1665 0.0999999C22.841 0.0999999 21.7665 1.17452 21.7665 2.5H26.5665ZM24.1665 12.5H21.7665C21.7665 13.8255 22.841 14.9 24.1665 14.9V12.5ZM34.1665 14.9C35.492 14.9 36.5665 13.8255 36.5665 12.5C36.5665 11.1745 35.492 10.1 34.1665 10.1V14.9ZM24.1665 2.5H21.7665V12.5H24.1665H26.5665V2.5H24.1665ZM24.1665 12.5V14.9H34.1665V12.5V10.1H24.1665V12.5Z"
                    fill="white"
                    mask="url(#path-2-inside-1)"
                  />
                  <path
                    d="M15.2295 18.8208L15.2295 31.0935"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.2295 16.0935L19.5596 21.0935H10.8994L15.2295 16.0935Z"
                    fill="white"
                  />
                  <path
                    d="M25.2295 21.5483V31.0938"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.2295 19.427L29.5596 23.177H20.8994L25.2295 19.427Z"
                    fill="white"
                  />
                </svg>
              }
            />

            <StatsCard
              value="16"
              label="Time"
              variant="orange"
              width="small"
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5168 28.9168L26.9335 35.3001C26.8584 36.1312 26.4743 36.9039 25.8571 37.4655C25.24 38.0271 24.4346 38.3368 23.6001 38.3334H16.3835C15.549 38.3368 14.7436 38.0271 14.1265 37.4655C13.5093 36.9039 13.1252 36.1312 13.0501 35.3001L12.4668 28.9168M12.4835 11.0834L13.0668 4.70011C13.1416 3.8719 13.5233 3.10158 14.137 2.54036C14.7506 1.97914 15.5519 1.66756 16.3835 1.66678H23.6335C24.4679 1.66339 25.2733 1.97311 25.8905 2.53473C26.5076 3.09636 26.8917 3.86904 26.9668 4.70011L27.5501 11.0834"
                    fill="#BF6F00"
                  />
                  <path
                    d="M27.5168 28.9168L26.9335 35.3001C26.8584 36.1312 26.4743 36.9039 25.8571 37.4655C25.24 38.0271 24.4346 38.3368 23.6001 38.3334H16.3835C15.549 38.3368 14.7436 38.0271 14.1265 37.4655C13.5093 36.9039 13.1252 36.1312 13.0501 35.3001L12.4668 28.9168M12.4835 11.0834L13.0668 4.70011C13.1416 3.8719 13.5233 3.10158 14.137 2.54036C14.7506 1.97914 15.5519 1.66756 16.3835 1.66678H23.6335C24.4679 1.66339 25.2733 1.97311 25.8905 2.53473C26.5076 3.09636 26.8917 3.86904 26.9668 4.70011L27.5501 11.0834"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.0002 31.6666C26.4435 31.6666 31.6668 26.4432 31.6668 19.9999C31.6668 13.5566 26.4435 8.33325 20.0002 8.33325C13.5568 8.33325 8.3335 13.5566 8.3335 19.9999C8.3335 26.4432 13.5568 31.6666 20.0002 31.6666Z"
                    fill="#BF6F00"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 15V20L22.5 22.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard
              value="78"
              label="Quizzes Available"
              variant="yellow"
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 39C8 37.6739 8.52678 36.4021 9.46447 35.4645C10.4021 34.5268 11.6739 34 13 34H40M8 39C8 40.3261 8.52678 41.5979 9.46447 42.5355C10.4021 43.4732 11.6739 44 13 44H40V4H13C11.6739 4 10.4021 4.52678 9.46447 5.46447C8.52678 6.40215 8 7.67392 8 9V39Z"
                    stroke="#FFC011"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <StatsCard
              value="90"
              label="Took Quizzes"
              variant="blue"
              width="small"
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 6.00012C34.5253 5.47483 35.1489 5.05815 35.8352 4.77386C36.5215 4.48958 37.2571 4.34326 38 4.34326C38.7429 4.34326 39.4785 4.48958 40.1648 4.77386C40.8511 5.05815 41.4747 5.47483 42 6.00012C42.5253 6.5254 42.942 7.14901 43.2263 7.83533C43.5105 8.52165 43.6569 9.25725 43.6569 10.0001C43.6569 10.743 43.5105 11.4786 43.2263 12.1649C42.942 12.8512 42.5253 13.4748 42 14.0001L15 41.0001L4 44.0001L7 33.0001L34 6.00012Z"
                    stroke="#236BD7"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <StatsCard
              value="16"
              label="Got Perfect"
              variant="purple"
              width="small"
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    stroke="#6E1B9E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
                    stroke="#6E1B9E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                    stroke="#6E1B9E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>

          <ForecastSection />
        </div>
      </div>
    </div>
  );
}
