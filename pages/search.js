import { useRouter } from "next/router";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { format } from "date-fns";
import InfoCard from "./components/InfoCard";
import { searchResults } from "../searchResults";
import Map from "./components/Map";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate =
    startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} |  ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Prices</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  description={description}
                  price={price}
                  location={location}
                  star={star}
                  title={title}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="xl:inline-flex xl:min-w-[600px]">
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
