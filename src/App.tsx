import { Tab } from "@headlessui/react";
import LoanForm from "./Loan/LoanForm";
import LoanResult from "./Loan/LoanResult";
import AddToast from "./Toasts/AddToast";
import ToastList from "./Toasts/ToastList";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  return (
    <section className="w-full max-w-screen-sm mx-auto">
      <div className="w-full max-w-md px-2 pt-10 pb-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-500 rounded-xl">
            <Tab
              key="loan"
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Loan Computation
            </Tab>
            <Tab
              className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg 
            focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
            text-blue-100 hover:bg-white/[0.12] hover:text-white"
            >
              Toast
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <LoanForm />
              <LoanResult />
            </Tab.Panel>
            <Tab.Panel>
              <AddToast />
              <ToastList />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default App;
