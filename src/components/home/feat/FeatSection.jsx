import React from 'react';
import featuresData from '../../../data/features.json';
import FeatItem from './FeatItem'

const featImages = import.meta.glob('../../../assets/images/feate/*.png', { eager: true });


const FeatSection = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto text-white">
            <h2 className="text-center text-2xl font-bold m-12">เรียนรู้จากคดีในไทย</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {featuresData.map((f) => {
                    const imagePath = `../../../assets/images/feate/${f.imgName}`;
                    const imageUrl = featImages[imagePath]?.default || '';
                    return (
                        <FeatItem
                            key={f.id}
                            img={imageUrl}
                            title={f.title}
                            desc={f.desc}
                        />
                    );
                })}
            </div>
        </section>
    )
}
export default FeatSection;