export default function CookieStand(props) {
  return (
            <div className="flex flex-row items-center justify-center">
            <div className="justify-center w-5/6 p-0 m-8 text-2xl bg-green-400 rounded-lg">
              <form
                className="flex flex-col p-4 m-4 rounded-l "
                onSubmit={props.questionAskedHandler}
              >
                <h2 className="flex flex-col items-center pb-8 text-2xl font-medium text-black-300 ">
                  Create Cookie Stand
                </h2>
                <div className="flex flex-row items-center justify-center rounded-l">
                  <p className="pr-5"> Location </p>
                  <input name="question" className="w-full" />
                </div>
              </form>
              <div className="flex flex-row items-center justify-center rounded-l m3 sp-4">
                <form
                  className="flex flex-col items-center m-4 rounded-l sp-4"
                  onSubmit={props.questionAskedHandler}
                >
                  <h2 className="flex flex-col items-center pb-3 text-base font-medium text-black-300 ">
                    Minimum Customers Per Hour
                  </h2>
                  <input name="question" className="max-w-6xl" />
                </form>
  
                <form
                  className="flex flex-col items-center m-4 rounded-l sp-4"
                  onSubmit={props.questionAskedHandler}
                >
                  <h2 className="flex flex-col items-center pb-3 text-base font-medium text-black-300 ">
                    Maximum Customers Per Hour
                  </h2>
                  <input name="question" className="max-w-6xl" />
                </form>
  
                <form
                  className="flex flex-col items-center m-4 rounded-l sp-4"
                  onSubmit={props.questionAskedHandler}
                >
                  <h2 className="flex flex-col items-center pb-3 text-base font-medium text-black-300 ">
                    Average Cookies per Sale
                  </h2>
                  <input name="question" className="max-w-6xl" />
                </form>
  
                <form
                  className="flex flex-col items-center p-2"
                  onSubmit={props.questionAskedHandler}
                >
                  <button className="h-24 p-4 m-4 text-2xl font-normal bg-green-600 square-lg w-96">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
  );
}
