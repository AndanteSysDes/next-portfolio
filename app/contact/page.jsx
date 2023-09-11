export default function Contact() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <h1>Contact</h1>
        <p>お気軽にご連絡ください</p>
        <form action="https://formspree.io/f/xbjvkrra" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="textarea">Message</label>
          <textarea name="message" rows="10" id="textarea" required ></textarea>
          <button type="submit">Send</button>
        </form>

      </div>
    </div>
    </>
  )
};