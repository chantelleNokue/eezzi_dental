import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";

const My_bookings = ({ header }) => {
  const [data, setData] = useState([
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },

    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
    {
      lastName: "Doe",
      firstName: "John",
      email: "johndoe@example.com",
      gender: "Male",
      date: "2023-07-20",
      streetAddress1: "123 Main St",
      service2: "Service 2",
      serviceProvider: "Service Provider",
      serviceProviderPrice: "100",
      status: "Confirmed",
    },
  ]);
  return (
    <Layout>
      <div className=" flex justify-center items-center text-xl"   id="bookings">
        <div className="h-screen">

          <div style={{ marginBottom: "50px" }} className="font-bold flex justify-center text-4xl">
            My Bookings
          </div>

          <div className="relative overflow-x-auto shadow-md  sm:rounded-lg bg-gray-100 text-md">
            <table className="w-full text-xl text-left">
              <thead className="text-2xl bg-sky-100 text-400">
                <tr>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Client Name
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Service Provider
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {data.map((dat, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white-500  dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 dark:hover:bg-sky-100"
                    >
                      <th
                        scope="row"
                        className="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {dat.lastName} {dat.firstName}
                      </th>
                      <td className="px-6 py-4">{dat.email}</td>
                      <td className="px-6 py-4 ">{dat.gender}</td>
                      <td className="px-6 py-4">{dat.date}</td>
                      <td className="px-6 py-4">{dat.streetAddress1}</td>

                      <td className="px-6 py-4">R {dat.serviceProviderPrice}</td>
                      <td className="px-6 py-4 text-green-500">
                        <span className="bg-blue-200 p-2 rounded-lg bg-opacity-75">
                          {" "}
                          {dat.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default My_bookings;