
import PicturetTable from '@/components/pictures/pictureTable'
import SavedPictureTable from '@/components/pictures/savedPictureTable'
import PostDataTable from '@/components/posts/postTable'
import SavedPostTable from '@/components/posts/savedPostTable'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-2 py-24">
      <h1 className="text-4xl font-bold mb-10 text-center">Dashboard 📐</h1>
      <Tabs defaultValue="allposts" className="w-full">
        <TabsList className='w-full h-full flex flex-col sm:flex-row justify-evenly'>
          <TabsTrigger value="allposts" className='w-full'>All Posts</TabsTrigger>
          <TabsTrigger value="allpictures" className='w-full'>All Pictures</TabsTrigger>
          <TabsTrigger value="savedposts" className='w-full'>Saved Posts</TabsTrigger>
          <TabsTrigger value="savedpictures" className='w-full'>Saved Pictures</TabsTrigger>
        </TabsList>
        <TabsContent value="allposts">
          <PostDataTable />
        </TabsContent>
        <TabsContent value="allpictures">
          <PicturetTable />
        </TabsContent>
        <TabsContent value="savedposts">
          <SavedPostTable />
        </TabsContent>
        <TabsContent value="savedpictures">
          <SavedPictureTable />
        </TabsContent>
      </Tabs>
    </main>
  )
}
