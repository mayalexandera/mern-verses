import React from 'react' 

const SizeChart = () => {
  return (
    <div>
      <div class='pdp-size-chart__conversion-table-container'>
        <table role='presentation' class='pdp-size-chart__conversion-table'>
          <tbody>
            <tr class=''>
              <td width='140'>S/M/L</td>
              <td width='50'>XXS</td>
              <td width='50'>XS</td>
              <td width='50'>S</td>
              <td width='50'>M</td>
              <td width='50'>L</td>
              <td width='50'>XL</td>
              <td width='50'>XXL</td>
            </tr>
            <tr class=''>
              <td width='140'>BRACELETS (cm)</td>
              <td width='50'>13.5 - 14</td>
              <td width='50'>14 - 15</td>
              <td width='50'>15 - 16.5</td>
              <td width='50'>16.5 - 17.5</td>
              <td width='50'>17.5 - 19</td>
              <td width='50'>19 - 21</td>
              <td width='50'>21 - 22</td>
            </tr>
            <tr class=''>
              <td width='140'>BRACELETS (in)</td>
              <td width='50'>5 - 5.5 </td>
              <td width='50'>5.5 - 6</td>
              <td width='50'>6 - 6.5</td>
              <td width='50'>6.5 - 7</td>
              <td width='50'>7 - 7.5</td>
              <td width='50'>7.5 - 8 </td>
              <td width='50'>8 - 8.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='pdp-size-chart__customer-service-text'>
        <p>
          Size conversions vary per brand and may not fully match the
          conversions shown above. If you are not sure about your size, please
          contact us{" "}
          <a href='/en-us/customer-service/product-info' target='_blank'>
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SizeChart;