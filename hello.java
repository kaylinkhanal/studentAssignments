import.Java.awt.event.ActionEvent;
import.Java.awt.event.ActionListener;
import.Javax.swing.JButton;
import.Javax.swing.JFrame;
import.Javax.swing.JTextfield;

class EventHandling extends JFrame implements ActionListener{
    JTextfield tf;
    EventHandling(){
        tf= new JTextfield();
        tf.setBounds(60,50,170,20)
        JButton button = new JButton ()
        button.setBounds(90,140,75,40)
        button.addActionListener(this)
        add(button)
        add(tf)
        setSize(250,250)
        setLayout(null)
        setVision(true)

    }
    @override
    public void actionPerformed(ActoionEvent e)
    {
       tf.setText("HEllo world")

    }
    psvm(string args[])
    {
        new EventHandling()
    }
}


