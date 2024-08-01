import data from '../dataFiles/data.json';
console.log(data)

export const Statistics = ({ data }) => {
    
    for (let i = 0; i < data.length; ++i) {
        const dataList = data.map(
                 <section class="statistics">
          <h2 class="title">Upload stats</h2>
              <ul class="stat-list">
    <li class="item">
      <span class="label">{data[i].label}</span>
      <span class="percentage">{data[i].percentage}</span>
              </li>
          </ul>
</section> 
        )
        console.log(dataList)
            return  dataList;
            
               

     }

};
/* <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */