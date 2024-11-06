import React from 'react'

const ShopToolbar = () => {
  return (
    <div className="shop_toolbar_wrapper d-flex justify-content-between align-items-center">
    <div className="page_amount">
        <p><span>1.260</span> Products Found</p>
    </div>
    <div className=" sorting_by d-flex align-items-center">
        <span>SORT BY :</span>
        <form className="select_option" action="#">
            <select name="orderby" id="short">

                <option selected value="1">NAME       3</option>
                <option  value="2">NAME  4</option>
                <option value="3">NAME  5</option>
                <option value="4">NAME  6</option>
                <option value="5">NAME  7</option>
                <option value="6">NAME  8</option>
            </select>
        </form>
    </div>
    <div className="toolbar_btn_wrapper d-flex align-items-center">
        <div className="view_btn">
            <a className="view" href="#">VIEW</a>
        </div>
        <div className="shop_toolbar_btn">
            <ul className="d-flex align-items-center">
                <li><a href="#" className="active btn-grid-3" data-role="grid_3" data-tippy="3"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i className="ion-grid"></i></a></li>

                <li><a href="#" className="btn-list" data-role="grid_list" data-tippy="List" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i className="ion-navicon"></i></a></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default ShopToolbar