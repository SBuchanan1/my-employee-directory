import React from "react";

function Worker(props) {
  return (
    // <div className="text-center">
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        // });
        //     </div>
        //   );


        export default Worker;
