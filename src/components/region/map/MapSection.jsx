import { useState } from 'react'
import { useNavigate } from "react-router";
import SearchProvince from '../../../common/SearchProvince'
import MapDetail from './MapDetail'
import MapZoom from './MapZoom'
import Button from '../../../common/Button'

const MapSection = () => {
    const [province, setProvince] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (province) {
            navigate(`/province/${encodeURIComponent(province)}`);
        }
    }

    return (
        <section className="px-30 mt-10">
            <div className='flex gap-2 items-center'>
                <SearchProvince value={province} onChange={setProvince}/>
                <Button type="primary" text="ค้นหา" onClick={handleSearch}/>
            </div>
            <div className="flex flex-wrap gap-10 mt-6 h-fit">
                <MapZoom/>
                <MapDetail/>
            </div>
        </section>
    )
}

export default MapSection