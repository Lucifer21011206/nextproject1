"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";



interface Partner {
  name: string;
  description: string;
  img: string;
}

const partners: Partner[] = [
    { name: "U.S. Black Chambers", description: "Affectionately known as the “National Voice of Black Businesses”, the USBC provides committed, visionary leadership, and advocacy in the realization of economic empowerment.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718215010230_USBClogo-with-text.png" },
    { name: "City of Atlanta", description: "Atlanta, Georgia, is a major transportation hub with Hartsfield-Jackson Atlanta International Airport, hosting over 1,000 international businesses and consulates, and is home to 13 Fortune 500 companies. Atlanta has rapidly grown into a modern metropolis.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718214326882_1630544813827.jpg" },
    { name: "Congressional Black Caucus", description: "CBC is committed to using the full Constitutional power, statutory authority & financial resources of the federal government to ensure that African Americans and other marginalized communities in the U.S. have the opportunity to achieve the American Dream", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718216862825_Screenshot(968).png" },
    { name: "SLDC - St. Louis", description: "SLDC is the independent economic development agency serving the City of St. Louis, MO. It's an action-oriented organization that exists to empower, develop and transform St. Louis through a vibrant, just & growing economy where all people can thrive.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221479778_SLDClogo.png" },
    { name: "NYSBBA", description: "The New York State Black Business Alliance (NYSBBA) was created to empower and sustain Black businesses and the communities where they are domiciled through entrepreneurship and capitalistic initiatives across the State.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221600059_NYSBBA_pic.png" },
    { name: "NFPBA", description: "The National Forum for Black Public Administrators (NFBPA), a 501(c)(3) nonprofit organization, is the principal and most progressive organization dedicated to the advancement of black public leadership in local and state governments.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221797281_NFBPA.png" },
    { name: "AACCNJ", description: "The African American Chamber of Commerce of New Jersey is dedicated to economically empowering and sustaining African American communities and businesses through entrepreneurship and capitalistic initiatives throughout NJ and in partnership with the NBCC.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718222642260_Screenshot(971).png" },
    { name: "Bunker Labs - Atlanta / IVMF", description: "With more resources than ever to support our community of entrepreneurs, Bunker Labs/IVMF's mission is to help veteran and military spouse entrepreneurs alike launch and grown their own businesses.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718222293577_Screenshot(970).png" },
    { name: "Business BOOST! Society™", description: "From personalized insights and expert advice to exclusive events and collaboration opportunities, your Business BOOST! Society account empowers you to take your business to new heights.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718226259376_IMG_9514.JPG" },
];

const CollaborativePartners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const visibleCards = isMobile ? 1 : 3;
  const totalPartners = partners.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPartners - visibleCards : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex + visibleCards > totalPartners ? prevIndex : nextIndex;
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "93%", mx: "auto", py: 5, overflow: "hidden" }}>
      <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: "1.5em", sm: "2.5em" } }}>
        Collaborative Partners
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: "16px", sm: "18px" }, textAlign: "center", mt: 1 }}>
        Business Boost! Society is proud to collaborate with industry-leading partners who share our vision for innovation and excellence. These strategic partnerships allow us to combine our expertise and resources to deliver exceptional solutions to our clients. Here are some of our valued collaborative partners.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden", mt: 2, position: "relative" }}>
      <IconButton 
  onClick={handlePrev} 
  sx={{ 
    position: "absolute", 
    left: 0, 
    top: "50%", 
    transform: "translateY(-50%)",
    zIndex: 2, 
    backgroundColor: "#FF6600",
    color: "#fff",
  }}
>
  <ArrowBackIos />
</IconButton>


        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`, transition: "transform 0.5s ease-in-out" }}>
          {partners.map((partner, index) => (
            <Card key={index} sx={{ width: isMobile ? "90%" : "30%", flexShrink: 0, p: 2, borderRadius: "12px" }}>
              <CardMedia component="img" image={partner.img} alt={partner.name} sx={{ height: "80px", objectFit: "contain" }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{partner.name}</Typography>
                <Typography variant="body2" sx={{ textAlign: "justify", mt: 1 }}>{partner.description}</Typography>
              </CardContent>
              <Box sx={{ position: "absolute", bottom: 10, left: 10 }}>
                <img src="/Vector 24" width={100} height={100} />
              </Box>
            </Card>
          ))}
        </Box>

        <IconButton onClick={handleNext} disabled={currentIndex + visibleCards >= totalPartners} sx={{ position: "absolute", right: 0, top: "50%" }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CollaborativePartners;
